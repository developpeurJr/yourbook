"use client";

export default function Confidentialite() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>Politique de confidentialité</h1>
      <p>Dernière mise à jour : 8 mai 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Cette application ("Your book") est une application personnelle permettant de sauvegarder vos lectures ou séries localement dans votre navigateur. Aucune donnée n'est envoyée ou stockée sur un serveur externe.
      </p>

      <h2>2. Données collectées</h2>
      <p>
        L'application ne collecte aucune donnée personnelle. Toutes les informations que vous saisissez (titres de livres, chapitres, etc.) sont stockées uniquement dans votre navigateur via la technologie <strong>localStorage</strong>.
      </p>

      <h2>3. Utilisation des données</h2>
      <p>
        Vos données sont utilisées uniquement pour permettre le bon fonctionnement de l'application sur votre appareil. Elles ne sont accessibles qu'à vous-même et ne sont jamais partagées avec des tiers.
      </p>

      <h2>4. Suppression des données</h2>
      <p>
        Vous pouvez à tout moment supprimer vos données en vidant le stockage local de votre navigateur (localStorage). Par exemple, dans les paramètres de votre navigateur ou via une option dans l'application (bientôt disponible).
      </p>

      <h2>5. Sécurité</h2>
      <p>
        Étant donné que vos données ne quittent jamais votre appareil, il n’y a pas de transfert sur Internet. Veuillez tout de même utiliser un appareil sécurisé pour garantir la confidentialité de vos informations.
      </p>

      <h2>6. Vos droits (conformément au RGPD)</h2>
      <p>
        Étant donné qu'aucune donnée personnelle n'est collectée ou traitée par un tiers, les droits tels que l'accès, la rectification ou la suppression sont entièrement entre vos mains, via votre propre navigateur.
      </p>

      <h2>7. Contact</h2>
      <p>
        Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter directement via l’adresse email associée à cette application si elle est fournie.
      </p>
    </div>
  );
}
