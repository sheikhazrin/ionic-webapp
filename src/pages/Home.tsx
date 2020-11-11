import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonActionSheet } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>APP TITLE <IonIcon icon={camera} /></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LOGO</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
