"use client";

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { useForm } from "~/hooks/use-form";
import { Checkbox } from "@heroui/checkbox";
import { z } from "zod";
import { Link } from "next-view-transitions";
import { toast } from "react-toastify";
import branding from "~/branding";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
    const formData = useForm({
        initialValues: {
            name: "",
            email: "",
            phoneNumber: "",
            propertyDamage: "",
            optIn: true,
        },
        schema: z.object({
            name: z.string().min(2, "Name is too short"),
            email: z.string().email("Please enter a valid email"),
            phoneNumber: z.string().min(10, "Please enter a valid phone number"),
            propertyDamage: z.string().min(10, "Please describe your property damage"),
            optIn: z.boolean().refine((value) => value === true, {
                message: "You must agree to receive communications",
            }),
        }),
        onSubmit: (values, self) => {
            self.resetForm();
            console.log(values);
            toast.success(
                "Thank you for your submission! We'll contact you within 24 hours."
            );
        },
    });

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5" />,
            title: "24/7 Emergency Hotline",
            content: branding.phoneNumber,
            link: `tel:${branding.phoneNumber.replace(/\D/g, "")}`,
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email Us",
            content: branding.email,
            link: `mailto:${branding.email}`,
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Office Location",
            content: "331 Newman Springs Rd, Suite 143, Red Bank, NJ 07701",
            link: "https://maps.google.com/?q=331+Newman+Springs+Rd+Suite+143+Red+Bank+NJ+07701",
        },
        {
            icon: <Clock className="w-5 h-5" />,
            title: "Response Time",
            content: "Immediate assistance when disaster strikes",
        },
    ];

    const benefits = [
        "Average 500% higher settlements",
        "No upfront costs - we only get paid when you do",
        "Licensed professionals with decades of experience",
    ];

    return (
        <div className="section-padding bg-gray-50">
            <div className="page-container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm mb-6">
                        FREE CONSULTATION
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        Get Your Free <span className="text-primary">Claim Evaluation</span> Today
                    </h1>
                    <p className="text-lg text-gray-600">
                        Don't let your insurance company shortchange you. Contact us for a free evaluation 
                        of your property damage claim.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <div className="card bg-white">
                        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                        <p className="text-gray-600 mb-8">
                            Fill out the form below and we'll contact you within 24 hours
                        </p>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <Input
                                    placeholder="Enter your full name"
                                    size="lg"
                                    radius="md"
                                    classNames={{
                                        input: "bg-gray-50",
                                        inputWrapper: "bg-gray-50 border-gray-200 hover:border-primary data-[hover=true]:bg-gray-50",
                                    }}
                                    value={formData.values.name}
                                    onValueChange={(value) =>
                                        formData.update("name", value)
                                    }
                                    isInvalid={!!formData.errors.name}
                                    errorMessage={formData.errors.name}
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        size="lg"
                                        radius="md"
                                        classNames={{
                                            input: "bg-gray-50",
                                            inputWrapper: "bg-gray-50 border-gray-200 hover:border-primary data-[hover=true]:bg-gray-50",
                                        }}
                                        value={formData.values.email}
                                        onValueChange={(value) =>
                                            formData.update("email", value)
                                        }
                                        isInvalid={!!formData.errors.email}
                                        errorMessage={formData.errors.email}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <Input
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        size="lg"
                                        radius="md"
                                        classNames={{
                                            input: "bg-gray-50",
                                            inputWrapper: "bg-gray-50 border-gray-200 hover:border-primary data-[hover=true]:bg-gray-50",
                                        }}
                                        value={formData.values.phoneNumber}
                                        onValueChange={(value) =>
                                            formData.update("phoneNumber", value)
                                        }
                                        isInvalid={!!formData.errors.phoneNumber}
                                        errorMessage={formData.errors.phoneNumber}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Describe Your Property Damage *
                                </label>
                                <Textarea
                                    placeholder="Please describe the damage to your property and when it occurred..."
                                    size="lg"
                                    radius="md"
                                    minRows={4}
                                    classNames={{
                                        input: "bg-gray-50",
                                        inputWrapper: "bg-gray-50 border-gray-200 hover:border-primary data-[hover=true]:bg-gray-50",
                                    }}
                                    value={formData.values.propertyDamage}
                                    onValueChange={(value) =>
                                        formData.update("propertyDamage", value)
                                    }
                                    isInvalid={!!formData.errors.propertyDamage}
                                    errorMessage={formData.errors.propertyDamage}
                                />
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <Checkbox
                                        className="mt-1"
                                        isSelected={formData.values.optIn}
                                        onValueChange={(value) =>
                                            formData.update("optIn", value)
                                        }
                                        classNames={{
                                            wrapper: "bg-white",
                                        }}
                                    />
                                    <p className="text-sm text-gray-600">
                                        By checking this box, I consent to receive text
                                        messages and calls from {branding.legalName.long}. 
                                        You can reply "STOP" at any time to opt-out. 
                                        Message and data rates may apply. View our{" "}
                                        <Link
                                            className="text-primary hover:underline font-medium"
                                            href="/privacy-policy"
                                        >
                                            Privacy Policy
                                        </Link>{" "}
                                        and{" "}
                                        <Link
                                            className="text-primary hover:underline font-medium"
                                            href="/terms-conditions"
                                        >
                                            Terms & Conditions
                                        </Link>.
                                    </p>
                                </div>
                                {formData.errors.optIn && (
                                    <p className="text-secondary text-sm mt-2">
                                        {formData.errors.optIn}
                                    </p>
                                )}
                            </div>

                            <Button 
                                size="lg"
                                radius="full"
                                className="w-full btn-secondary"
                                onPress={() => formData.handleSubmit()}
                            >
                                Get Free Evaluation
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Quick Contact */}
                        <div className="card bg-gradient-to-br from-primary to-blue-600 text-white">
                            <h3 className="text-2xl font-bold mb-4">
                                Why Choose MAX ADJUST?
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={`tel:${branding.phoneNumber.replace(/\D/g, "")}`}
                                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now: {branding.phoneNumber}
                            </a>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="card bg-white">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 mb-1">
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    className="text-primary hover:underline"
                                                    target={info.link.startsWith("http") ? "_blank" : undefined}
                                                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                                >
                                                    {info.content}
                                                </a>
                                            ) : (
                                                <p className="text-gray-600">{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}