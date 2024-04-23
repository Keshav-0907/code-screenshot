import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
    persist(() => ({
        code: "",
        title: "Untitled",
        theme: "hyper",
        darkMode: true,
        fontSize: 16,
        fontFamily: "JetBrains Mono",
        language: "python",
        showBackground: true,
        autoDetection: false,
        padding: 40,
    }), {
        name: "user-editor-preferences"
    })
)

export default useStore