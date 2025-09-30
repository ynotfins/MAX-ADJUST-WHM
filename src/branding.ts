export type branding = {
    name: string;
    phoneNumber: string;
    email: string;
    primaryAddress: string;
    domain: string;
    legalName: {
        short: string;
        long: string;
    };
};

export const branding: branding = {
    name: "MaxAdjust.com",
    legalName: {
        short: "MAXADJUST",
        long: "MaxAdjust.com LLC",
    },
    domain: "maxadjust.com",
    phoneNumber: "(888) 999-5740",
    email: "info@maxadjust.com",
    primaryAddress:
        "331 Newman Springs Rd<br/> Suite 143<br/> Red Bank, NJ 07701",
};

export default branding;
