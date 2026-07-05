export const AGORA_CONFIG = {
  appId: process.env.AGORA_APP_ID || '',
  appCertificate: process.env.AGORA_APP_CERTIFICATE || '',
};

export const AGORA_CHANNEL_CONFIG = {
  videoProfile: '720p_6',
  audioProfile: 'music_high_quality',
  audioScenario: 'chatroom',
};

export const CALL_CONFIG = {
  videoEnabled: true,
  audioEnabled: true,
  screenShareEnabled: false,
  maxParticipants: 8,
};
