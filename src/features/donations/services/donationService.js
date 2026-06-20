export function buildDonationFromInput(input, id = Date.now().toString()) {
    return {
        id,
        ...input,
        value: Number(input.value),
    };
}

export function buildDonationInputFromDonation(donation) {
    return {
        title: donation.title,
        location: donation.location,
        description: donation.description,
        company: donation.company,
        value: donation.value.toString(),
    };
}
