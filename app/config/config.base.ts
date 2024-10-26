import Config from "react-native-config"

export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
  catchErrors: "always" | "dev" | "prod" | "never"
  exitRoutes: string[]
  supabaseUrl: string
  supabaseAnonKey: string
  openAIApiKey: string
  elevenLabsApiKey: string
}

export type ConfigProps = ConfigBaseProps

export const ConfigBase: ConfigBaseProps = {
  persistNavigation: "dev",
  catchErrors: "always",
  exitRoutes: ["welcome"],
  supabaseUrl: Config.SUPABASE_URL || "",
  supabaseAnonKey: Config.SUPABASE_ANON_KEY || "",
  openAIApiKey: Config.OPENAI_API_KEY || "",
  elevenLabsApiKey: Config.ELEVEN_LABS_API_KEY || "",
}
