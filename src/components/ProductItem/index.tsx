import React from 'react';
import { Image, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductScreen from '../../screens/ProductScreen';

interface ProductItemProps {
    item: {
        id: string,
        title: string,
        image: string,
        avgRating: number,
        ratings: number,
        price: number,
        oldPrice: number,
    }
}

const ProductItem = (props: ProductItemProps) => {
    const { item } = props;
    const navigation = useNavigation();

    const clickItem = () => {
        navigation.navigate('ProductDetails', {id: item.id})
    }
    return (
        <Pressable onPress={clickItem} style={styles.root}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                <View style={styles.ratingsContainer}>
                    {[0, 0, 0, 0, 0].map((el, i) =>
                        <Icon
                            key={`${item.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={18}
                            color="#e47911" />
                    )}
                    <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>${item.price}
                    {item.oldPrice &&
                        (<Text style={styles.oldPrice}> ${item.oldPrice}</Text>
                        )}
                </Text>
            </View>
        </Pressable>
    )
}

export default ProductItem;