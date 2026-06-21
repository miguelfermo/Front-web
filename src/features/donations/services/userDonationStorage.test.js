import { describe, expect, it, beforeEach } from 'vitest'
import { loadUserDonations, saveUserDonation } from './userDonationStorage'

describe('userDonationStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns empty array when no donations are stored', () => {
    expect(loadUserDonations()).toEqual([])
  })

  it('appends donations to localStorage', () => {
    const donation = {
      id: '1',
      campaignId: 10,
      campaignTitle: 'Campanha A',
      type: 'cash',
      typeLabel: 'Doação em dinheiro',
      donatedAt: '2026-06-21T00:00:00.000Z',
    }

    saveUserDonation(donation)

    expect(loadUserDonations()).toEqual([donation])
  })
})
