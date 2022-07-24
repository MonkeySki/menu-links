import React from "react";
import { getProfile } from "../data";

export default function Profile() {
  let profile = getProfile();
    return (
      <div class='page'>
        <h2>Profile</h2>
        <p>Name: {profile.name}</p>
        <p>Bracelet: {String(profile.bracelet)}</p>



      </div>
    );
  }