import { writable } from "svelte/store"

export const selected = writable(0)
export const error = writable(false)
export const loading = writable(false)
