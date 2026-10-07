import { Pressable, Text, StyleSheet, Image } from 'react-native'
import Icon from './Icon'
import { colors, fonts } from '../theme'

export default function CustomButton({ title, style = {}, type = 'primary', icon = 'false', iconUrl, onPress = () => {}, textColor = '#000',  }) {
    return (
        <>
            {type === "primary" && 
                <Pressable 
                    style={[
                        styles.cta, style, 
                        { 
                            backgroundColor: '#C25A2B', 
                        },
                    ]}
                    onPress={onPress}
                >
                    {icon && <Icon name={iconUrl} size={22} color={colors.white} />}
                    <Text style={[styles.primary, styles.ctaText]}>{title}</Text>
                </Pressable>
            }

            {type === "secondary" && 
                <Pressable 
                    style={[
                        styles.cta, style, 
                        { 
                            backgroundColor: 'none', 
                            borderWidth: 1,
                            borderColor: '#afafaf',
                        },
                    ]}
                    onPress={onPress}
                >
                    {icon && <Icon name={iconUrl} size={22} color={ type === 'secondary' ? textColor : '#fff' } />}
                    <Text style={[styles.secondary, styles.ctaText, { color: textColor }]}>{title}</Text>
                </Pressable>
            }

            {type === "accent" && 
                <Pressable 
                    style={[
                        styles.cta, style, 
                        { 
                            backgroundColor: '#F4EFE6', 
                        },
                    ]}
                    onPress={onPress}
                >
                    {icon && <Icon name={iconUrl} size={22} color={colors.pine} />}
                    <Text style={[styles.accent, styles.ctaText]}>{title}</Text>
                </Pressable>
            }
        
        </>
    )
}

const styles = StyleSheet.create({
    cta: {
        paddingVertical: 16,
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        flexDirection: 'row',
        gap: 8,
    },
    ctaText: {
        fontFamily: fonts.title,
        fontSize: 18,
    },
    primary: {
        color: '#fff',
    },
    secondary: {
        color: '#000',
    },
    accent: {
        color: '#1B3A31'
    }
})