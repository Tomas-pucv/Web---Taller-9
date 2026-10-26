import { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  useIonRouter,
  useIonToast
} from "@ionic/react";

import { registrarUsuario } from "../services/api";
import "./LoginPage.css";

// Desafío: página de registro. Usa la ruta pública POST /api/usuarios y muestra
// los mensajes de error del servidor (400: datos inválidos, 409: el usuario ya existe).

const RegistroPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const router = useIonRouter();
  const [presentarToast] = useIonToast();

  const registrar = async (evento: React.FormEvent) => {
    evento.preventDefault();
    setMensajeError("");
    setEnviando(true);
    try {
      const usuario = await registrarUsuario(username, password);
      setUsername("");
      setPassword("");
      presentarToast({
        message: `Cuenta «${usuario.username}» creada. Ya puedes iniciar sesión.`,
        color: "success",
        duration: 3000,
        position: "bottom"
      });
      router.push("/login", "root", "replace");
    } catch (error) {
      setMensajeError(error instanceof Error ? error.message : String(error));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/login" />
          </IonButtons>
          <IonTitle>Crear cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <form className="login" onSubmit={registrar}>
          <h1>Registro</h1>
          <p>Elige un nombre de usuario y una contraseña de al menos 8 caracteres.</p>

          <IonList>
            <IonItem>
              <IonInput
                label="Usuario"
                labelPlacement="stacked"
                value={username}
                autocomplete="username"
                onIonInput={(e) => setUsername(e.detail.value ?? "")}
              />
            </IonItem>
            <IonItem>
              <IonInput
                label="Contraseña"
                labelPlacement="stacked"
                type="password"
                value={password}
                autocomplete="new-password"
                onIonInput={(e) => setPassword(e.detail.value ?? "")}
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>
            </IonItem>
          </IonList>

          {mensajeError && (
            <p className="error" role="alert">
              {mensajeError}
            </p>
          )}

          <IonButton type="submit" expand="block" disabled={enviando}>
            Crear cuenta
          </IonButton>

          <p className="enlace">
            ¿Ya tienes cuenta?{" "}
            <IonRouterLink routerLink="/login" routerDirection="back">
              Inicia sesión
            </IonRouterLink>
          </p>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default RegistroPage;
