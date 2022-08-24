import { useContext } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BigHeaderTitle from '../../../components/utils/BigHeaderTitle.component';
import PaddingContent from '../../../components/utils/PaddingContent.component';

export default function ConsumeFuel() {
    return (
        <SafeAreaView>
            <PaddingContent>
                    <BigHeaderTitle title={'ConsumeFuel'}/>
            </PaddingContent>
        </SafeAreaView>
    );
}