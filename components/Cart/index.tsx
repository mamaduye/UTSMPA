import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'

const Cart = (props: { quantity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
        // <View style={styles.cartWrapper}>
        //     <Image source={cart} style={styles.iconCart} />
        //     <Text style={styles.notif}>10</Text>
        // </View>
        // <Text style={styles.text}>Keranjang Belanja</Text>
        <View>
            <View style={styles.cartWrapper}>
            <Image 
                source={{
                uri: 'https://e7.pngegg.com/pngimages/342/637/png-clipart-graphy-shopping-cart-computer-icons-shopping-cart-blue-logo.png',
                }} 
                style={styles.image} 
            />
            {/* Badge Notification */}
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{props.quantity}</Text>
            </View>
            </View>
            <Text style={styles.text}>Keranjang</Text>
        </View>
    );
};

export default Cart 
const styles = StyleSheet.create({
    cartWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        position: 'relative',
      },
      image: {
        width: 50,
        height: 50,
      },
      badge: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      badgeText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
      },
      text: {
        fontSize: 16,
        fontWeight: 'bold',
      },
})