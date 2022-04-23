/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LocalDataSetExample } from './componens/LocalDataSetExample';
import { RemoteDataSetExample3 } from './componens/RemoteDataSetExample3';
import { RemoteDataSetExample } from './componens/RemoteDataSetExample';
import { RemoteDataSetExample2 } from './componens/RemoteDataSetExample2';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={(backgroundStyle, { flex: 1 })}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        nestedScrollEnabled
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollContainer}>
        <View style={[styles.container]}>
          <Text style={styles.title}>Autocomplete dropdown</Text>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 100 } })]}>
            <Text style={styles.sectionTitle}>Local list</Text>
            <LocalDataSetExample />
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 99 } })]}>
            <Text style={styles.sectionTitle}>Remote list</Text>
            <RemoteDataSetExample />
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 98 } })]}>
            <Text style={styles.sectionTitle}>Remote list customization</Text>
            <RemoteDataSetExample2 />
          </View>
          <View
            style={[styles.section, Platform.select({ ios: { zIndex: 97 } })]}>
            <Text style={styles.sectionTitle}>Remote list customization 2</Text>
            <RemoteDataSetExample3 />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 50,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default App;
