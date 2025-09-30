"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { AREAS } from "~/constants/areas";
import services from "~/constants/services";
import Link from "next/link";

interface ServiceAreasMapProps {
    serviceId?: string;
}

export const ServiceAreasMap = ({ serviceId }: ServiceAreasMapProps = {}) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [lng] = useState(-74.1724);
    const [lat] = useState(40.7357);
    const [zoom] = useState(8);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedLocation, setSelectedLocation] = useState<string | null>(
        null
    );
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const markersRef = useRef<mapboxgl.Marker[]>([]);

    // Determine which service to use for links
    const currentServiceId = serviceId || "fire-damage"; // Default to fire-damage if not specified
    const currentService = services.find(
        (service) => service.id === currentServiceId
    );

    // Filter areas based on search query with improved filtering
    const filteredAreas = AREAS.filter((area) => {
        if (!searchQuery.trim()) return true; // Show all when search is empty

        const query = searchQuery.toLowerCase().trim();
        const cityMatch = area.city.toLowerCase().includes(query);
        const addressMatch = area.address.toLowerCase().includes(query);
        const combinedMatch = `${area.city} ${area.address}`
            .toLowerCase()
            .includes(query);

        return cityMatch || addressMatch || combinedMatch;
    });

    // Group areas by city for better organization
    const groupedAreas = filteredAreas.reduce((acc, area) => {
        if (!acc[area.city]) {
            acc[area.city] = [];
        }
        acc[area.city].push(area);
        return acc;
    }, {} as Record<string, typeof AREAS>);

    const handleLocationSelect = (areaId: string) => {
        const area = filteredAreas.find((a) => a.id === areaId);

        // Always zoom to the selected location if map and area exist
        if (area && map.current && isMapLoaded) {
            map.current.flyTo({
                center: [area.lng, area.lat],
                zoom: 12,
                duration: 1000,
            });
        }

        // Update selection state after initiating the zoom
        setSelectedLocation(areaId);
    };

    useEffect(() => {
        if (!mapContainer.current) return;

        mapboxgl.accessToken =
            "pk.eyJ1IjoibWF4YWRqdXN0IiwiYSI6ImNtOXFuaDV0dzB1ejIyaXNhejNtdDZ0eHUifQ.cbqbO1cxP2jQt8egxDVk0A";

        // Initialize map
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v12",
            center: [lng, lat],
            zoom: zoom,
        });

        // Add navigation control
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

        // Wait for map to load
        map.current.on("load", () => {
            setIsMapLoaded(true);
        });

        // Cleanup on unmount
        return () => {
            // Clear markers
            markersRef.current.forEach((marker) => marker.remove());
            markersRef.current = [];

            // Remove map
            const currentMap = map.current;
            if (currentMap) {
                currentMap.remove();
            }
        };
    }, [lat, lng, zoom]); // Only recreate map when these core props change

    // Separate effect to handle markers when filteredAreas or selectedLocation changes
    useEffect(() => {
        if (!map.current || !isMapLoaded) return;

        // Clear existing markers
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = [];

        // Add markers for each area
        filteredAreas.forEach((settlement) => {
            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
                <div class="flex flex-col gap-2 p-2">
                    <div>
                        <strong>${settlement.city}</strong>
                        <br />
                        ${settlement.address}
                    </div>
                    <a 
                        href="${currentService?.href}/location/${settlement.id}"
                        class="text-sm py-2 px-4 rounded bg-primary text-white font-bold hover:bg-primary/90 transition-colors text-center"
                    >
                        Get ${currentService?.label} Help
                    </a>
                </div>
            `);

            const marker = new mapboxgl.Marker({
                color:
                    selectedLocation === settlement.id ? "#FF0000" : "#3B82F6",
            })
                .setLngLat([settlement.lng, settlement.lat])
                .setPopup(popup)
                .addTo(map.current!);

            // Add click event to marker
            const markerElement = marker.getElement();
            markerElement.addEventListener("click", (e) => {
                e.stopPropagation();
                handleLocationSelect(settlement.id);
                // Open popup after zoom
                setTimeout(() => {
                    popup.addTo(map.current!);
                }, 1000);
            });

            // Store marker reference for cleanup
            markersRef.current.push(marker);
        });
    }, [
        filteredAreas,
        selectedLocation,
        isMapLoaded,
        currentService?.href,
        currentService?.label,
    ]);

    if (typeof window === "undefined") {
        return null;
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="text-center">
                <h2 className="font-bold text-3xl">Areas we serve</h2>
                <p className="mt-2">
                    We have licensed adjusters in your area ready to help you
                    with your {currentService?.label.toLowerCase()}.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Location List */}
                <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search by city or address..."
                            className="w-full p-2 border rounded"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="overflow-y-auto max-h-[400px]">
                        {Object.entries(groupedAreas).map(([city, areas]) => (
                            <div key={city} className="mb-4">
                                <div className="font-semibold text-sm border-b px-1 py-1 mb-2 bg-gray-100">
                                    {city}
                                </div>

                                {areas.map((area) => (
                                    <div
                                        key={area.id}
                                        className={`px-1 py-1 border-b cursor-pointer hover:bg-gray-50 ${
                                            selectedLocation === area.id
                                                ? "bg-blue-50"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            handleLocationSelect(area.id)
                                        }
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-sm text-gray-600">
                                                    {area.address}
                                                </div>
                                            </div>
                                            <Link
                                                href={`${currentService?.href}/location/${area.id}`}
                                                className="text-xs text-blue-600 hover:underline px-2 py-1"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                View
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                        {Object.keys(groupedAreas).length === 0 && (
                            <div className="text-center py-4 text-gray-500">
                                No locations found. Try a different search term.
                            </div>
                        )}
                    </div>
                </div>

                {/* Map */}
                <div className="w-full md:w-2/3">
                    <div
                        ref={mapContainer}
                        className="w-full h-[500px] rounded-lg shadow"
                    />
                </div>
            </div>
        </div>
    );
};
