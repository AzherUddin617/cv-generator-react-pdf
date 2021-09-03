import React from 'react';
import classes from './MyDocument.module.scss';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from './Header';
import * as constance from '../constance';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 32
    },
    body: {
        paddingTop: 24,
        display: 'flex',
    },
    bodyLeft: {
      paddingRight: 18,
      borderRight: constance.BORDER,
    }
});

// Create Document Component
const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header />

        <View style={styles.body}>
          <View style={styles.bodyLeft}></View>
          <View style={styles.bodyRight}></View>
        </View>
      </Page>
    </Document>
);

export default MyDocument;