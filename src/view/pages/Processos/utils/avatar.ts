const avatarColors = [
  "hsl(263 70% 58%)",
  "hsl(160 84% 39%)",
  "hsl(189 94% 43%)",
  "hsl(38 92% 50%)",
  "hsl(347 77% 50%)",
];

export const getAvatarColor = (initials: string) =>
  avatarColors[initials.charCodeAt(0) % avatarColors.length];
