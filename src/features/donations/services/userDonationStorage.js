import { readStorage, writeStorage } from "@/shared/storage/localStorage"

const STORAGE_KEY = "userDonations"

export const loadUserDonations = () => readStorage(STORAGE_KEY, [])

export const saveUserDonation = (donation) => {
  writeStorage(STORAGE_KEY, [...loadUserDonations(), donation])
}
