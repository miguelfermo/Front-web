import { describe, expect, it, beforeEach } from 'vitest'
import { readStorage, writeStorage } from './localStorage'

describe('shared/storage/localStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return fallback when key is missing', () => {
    expect(readStorage('missing', { value: true })).toEqual({ value: true })
  })

  it('should parse JSON from localStorage', () => {
    localStorage.setItem('count', JSON.stringify(3))
    expect(readStorage('count', 0)).toBe(3)
  })

  it('should write JSON to localStorage', () => {
    writeStorage('user', { name: 'Test' })
    expect(localStorage.getItem('user')).toBe(JSON.stringify({ name: 'Test' }))
  })
})
