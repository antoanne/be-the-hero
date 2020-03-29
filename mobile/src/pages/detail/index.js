import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;

  const message = `Olá, gostaria de ajudar a ONG "${incident.name}" com o caso ${incident.description}, apiando com o valor de ${Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(incident.value)}!`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject:`Salvando ${incident.name}`,
      recipients: ['antoanne@gmail.com'],
      body:message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5521996815959&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        
        <TouchableOpacity 
          style={styles.incidentDetailsButton} onPress={navigateBack}
          >
          <Feather name='arrow-left' size={28} color='#e02041' />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.uf}</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={[styles.incidentValue, {marginBottom:0}]}>{Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(incident.value)}</Text>
      </View>

      <View style={styles.incidentContactBox}>
        <Text style={styles.title}>Salve o dia!</Text>
        <Text style={styles.title}>Seja o herói deste caso</Text>
        <Text style={styles.description}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity 
            style={[styles.action, {backgroundColor:'#075E54'}]} onPress={sendWhatsapp}
          >
              <Text style={styles.actionTextWhatsapp}>Whatsapp </Text>
              <Feather name='message-circle' size={16} color='white' />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.action, {backgroundColor:'#0066FF'}]} onPress={sendEmail}
          >
              <Text style={styles.actionTextEmail}>E-mail </Text>
              <Feather name='mail' size={16} color='white' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}