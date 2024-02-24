// API Authentication 

import SpotifyWebApi from "spotify-web-api-js";

const SpotifyApi = new SpotifyWebApi();
const clientId = '1ec87e5b56064cdf9ce5fa0004790691';
const redirectUrl = 'http://localhost:3000';

const scopes = ['user-read-private', 'user-read-email'];

// Initiate Spotify authentication process

export const initiateSpotifyAuthentication = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

};

// Access token from the URL Hash

export const getAccessTokenFromUrlHash = () => {
  const hash = window.location.hash.substring(1);
  const hashParams = new URLSearchParams(hash);
  return hashParams.get('access_token');
};

// Set the access token for the Spotify API instance

export const setAccessToken = (token) => {
    SpotifyApi.setAccessToken(token);
};

export default SpotifyApi;