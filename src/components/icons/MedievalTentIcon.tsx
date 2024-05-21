import React, { SVGProps } from "react";

const MedievalTentIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    role="img"
    viewBox="0 0 200 200"
    {...props}
  >
    {/* Fond */}
    <rect x="0" y="0" width="200" height="200" fill="#B58863" />

    {/* Corps de la tente */}
    <path
      d="M20,100 L180,100 L150,20 L50,20 Z"
      fill="#784421"
    />

    {/* Porte */}
    <rect x="85" y="100" width="30" height="50" fill="#6E4D2A" />

    {/* Poteaux */}
    <rect x="75" y="70" width="10" height="30" fill="#8C6239" />
    <rect x="115" y="70" width="10" height="30" fill="#8C6239" />
  </svg>
);

export default MedievalTentIcon;