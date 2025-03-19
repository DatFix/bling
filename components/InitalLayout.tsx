import { useAuth } from "@clerk/clerk-expo"
import { Stack, useRouter, useSegments } from "expo-router"
import { useEffect } from "react"
import * as SecureStore from 'expo-secure-store'


export default function InitalLayout() {
    const { isLoaded, isSignedIn } = useAuth()

    const segments = useSegments()
    const router = useRouter()

    

    useEffect(() => {
        if (!isLoaded) return;

        const inAuthSceen = segments[0] === "(auth)";

        if (!isSignedIn && !inAuthSceen) router.replace("/(auth)/login");
        else if (isSignedIn && inAuthSceen) router.replace("/(tabs)");
    }, [isLoaded, isSignedIn, segments])

    if (!isLoaded) return null
    return <Stack screenOptions={{ headerShown: false }} />
}

