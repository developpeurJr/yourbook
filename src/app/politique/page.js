"use client";

export default function PrivacyPolicy() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      {/* English version */}
      <h1>Privacy Policy</h1>
      <p>Last updated: May 8, 2025</p>

      <h2>1. Introduction</h2>
      <p>
        This application is a personal app that allows you to save your readings or series locally in your browser. No data is sent or stored on an external server.
      </p>

      <h2>2. Data Collected</h2>
      <p>
        The application does not collect any personal data. All information you enter (book titles, chapters, etc.) is stored only in your browser via the <strong>localStorage</strong> technology.
      </p>

      <h2>3. Use of Data</h2>
      <p>
        Your data is used only to ensure the proper functioning of the app on your device. It is accessible only to you and is never shared with third parties.
      </p>

      <h2>4. Deleting Data</h2>
      <p>
        You can delete your data at any time by clearing your browser&apos;s local storage (localStorage). For example, in your browser&apos;s settings or through an option in the app (coming soon).
      </p>

      <h2>5. Security</h2>
      <p>
        Since your data never leaves your device, there is no transfer over the internet. However, please use a secure device to ensure the confidentiality of your information.
      </p>

      <h2>6. Your Rights (in accordance with GDPR)</h2>
      <p>
        Since no personal data is collected or processed by a third party, rights such as access, correction, or deletion are entirely in your hands through your own browser.
      </p>

      <h2>7. Contact</h2>
      <p>
        For any questions regarding this privacy policy, you can contact me directly via the email address associated with this app if provided: <strong>webynotif@email.com</strong>
      </p>

      {/* French version */}
      <h1>Politique de confidentialité</h1>
      <p>Dernière mise à jour : 8 mai 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Cette application est une application personnelle permettant de sauvegarder vos lectures ou séries localement dans votre navigateur. Aucune donnée n&apos;est envoyée ou stockée sur un serveur externe.
      </p>

      <h2>2. Données collectées</h2>
      <p>
        L&apos;application ne collecte aucune donnée personnelle. Toutes les informations que vous saisissez (titres de livres, chapitres, etc.) sont stockées uniquement dans votre navigateur via la technologie <strong>localStorage</strong>.
      </p>

      <h2>3. Utilisation des données</h2>
      <p>
        Vos données sont utilisées uniquement pour permettre le bon fonctionnement de l&apos;application sur votre appareil. Elles ne sont accessibles qu&apos;à vous-même et ne sont jamais partagées avec des tiers.
      </p>

      <h2>4. Suppression des données</h2>
      <p>
        Vous pouvez à tout moment supprimer vos données en vidant le stockage local de votre navigateur (localStorage). Par exemple, dans les paramètres de votre navigateur ou via une option dans l&apos;application (bientôt disponible).
      </p>

      <h2>5. Sécurité</h2>
      <p>
        Étant donné que vos données ne quittent jamais votre appareil, il n&apos;y a pas de transfert sur Internet. Veuillez tout de même utiliser un appareil sécurisé pour garantir la confidentialité de vos informations.
      </p>

      <h2>6. Vos droits (conformément au RGPD)</h2>
      <p>
        Étant donné qu&apos;aucune donnée personnelle n&apos;est collectée ou traitée par un tiers, les droits tels que l&apos;accès, la rectification ou la suppression sont entièrement entre vos mains, via votre propre navigateur.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter directement via l&apos;adresse email associée à cette application si elle est fournie : <strong>webynotif@email.com</strong>
      </p>
    </div>
  );
}
