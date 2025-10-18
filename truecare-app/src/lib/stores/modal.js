import { writable } from 'svelte/store';

export const showModal = writable(false);
export const modalMessage = writable('This feature is coming soon!');