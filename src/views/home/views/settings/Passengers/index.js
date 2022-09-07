import { Image, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import PaddingContent from '../../../../../components/utils/PaddingContent.component';
import SafeAreaViewDefault from "../../../../../components/utils/SafeAreaViewLogin.component";

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default function Passengers() {
    return (
        <SafeAreaViewDefault>
            <PaddingContent>
            <FlatList
                data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            </PaddingContent>
        </SafeAreaViewDefault>
    );
}