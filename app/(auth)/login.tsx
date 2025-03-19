// (auth)/login.tsx
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { styles } from '@/styles/auth.styles'
import Entypo from '@expo/vector-icons/Entypo';
import { COLORS } from '@/constants/theme';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSSO } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

export default function Login() {
    const { startSSOFlow } = useSSO()
    const router = useRouter()

    const handleGoogleSignIn = async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy: "oauth_google" })

            if (setActive && createdSessionId) {
                await setActive({ session: createdSessionId })
                router.replace("/(tabs)")
            } else {
                // Handle case where no session was created
                Alert.alert("Login Failed", "Unable to complete Google sign-in. Please try again.")
            }
        } catch (error) {
            console.error("Google sign-in error:", error)
            Alert.alert("Login Error", "An error occurred during sign-in. Please try again.")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Entypo name="leaf" size={24} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>Bling</Text>
                <Text style={styles.tagline}>don't miss anything</Text>
            </View>

            <View style={styles.illustrationContainer}>
                <Image
                    source={require('../../assets/images/bg2.png')}
                    style={styles.illustration}
                    resizeMode='cover'
                />
            </View>

            <View style={styles.loginSection}>
                <TouchableOpacity style={styles.googleButton} activeOpacity={0.9} onPress={handleGoogleSignIn}>
                    <View style={styles.googleIconContainer}>
                        <AntDesign name="google" size={20} color={COLORS.surface} />
                    </View>
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                <Text style={styles.termsText}>By continuing, you agree to our Terms of Service and Privacy Policy</Text>
            </View>
        </View>
    )
}