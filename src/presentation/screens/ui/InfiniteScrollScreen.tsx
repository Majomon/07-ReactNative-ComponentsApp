import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import {Title} from '../../components/ui/Title';
import {colors} from '../../../config/theme/theme';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    /* el _ es el valor, en este caso no me interesa saberlo */
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <FlatList
        data={numbers}
        /* Cuando llegamos al final */
        onEndReached={loadMore}
        /* Cargar los elementos antes de llegar al final */
        onEndReachedThreshold={0.6}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        /* Indicador de carga */

        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <Image
      source={{uri: `https://picsum.photos/id/${number}/200/300`}}
      style={{height: 400, width: '100%'}}
    />
  );
};
