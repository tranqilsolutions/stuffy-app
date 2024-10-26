declare module 'react-native-config' {
  export interface NativeConfig {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    OPENAI_API_KEY: string;
    ELEVEN_LABS_API_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
