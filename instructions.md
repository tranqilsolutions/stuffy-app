# AI-Powered Stuffed Animal Companion App PRD
## React Native Implementation Plan

### 1. Core Authentication & Setup (P0)

#### 1.1 Backend Infrastructure
- Set up Supabase backend service
- Configure authentication system with JWT tokens
- Implement secure API key storage for OpenAI and ElevenLabs
- Create environment configurations (dev/prod)

#### 1.2 Basic App Structure
- Initialize React Native project with navigation
- Set up basic screens (Login, Home, Chat, Settings)
- Implement secure local storage
- Create base UI components

### 2. Stuffed Animal Setup Flow (P0)

#### 2.1 Initial Setup Screen
- Create onboarding flow
- Implement camera integration for photos
- Add form for stuffed animal details
- Set up image storage in Supabase

#### 2.2 Voice Configuration
- Integrate ElevenLabs voice selection API
- Create voice customization interface
- Implement voice preview functionality
- Store voice preferences in Supabase

### 3. Core Conversation System (P0)

#### 3.1 Speech-to-Text (Whisper)
```typescript
interface WhisperConfig {
  endpoint: '/v1/audio/transcriptions'
  params: {
    model: 'whisper-1',
    response_format: 'text',
    temperature: 0.3
  }
}
```

#### 3.2 Conversation Processing (ChatGPT)
```typescript
interface ChatConfig {
  model: 'gpt-4',
  personality_prompt: string,
  context_window: number,
  temperature: 0.7
}
```

#### 3.3 Voice Synthesis (ElevenLabs)
```typescript
interface VoiceConfig {
  endpoint: '/v1/text-to-speech/{voice_id}/stream',
  settings: {
    stability: 0.5,
    similarity_boost: 0.8,
    style: 'child-friendly'
  }
}
```

### 4. Audio Management (P1)

#### 4.1 Recording System
- Implement voice recording functionality
- Add audio preprocessing
- Create recording UI with feedback
- Handle recording permissions

#### 4.2 Playback System
- Set up React Native Track Player
- Implement streaming audio playback
- Add audio controls (play, pause, stop)
- Create audio caching system

### 5. Conversation Management (P1)

#### 5.1 Chat Interface
- Create real-time chat UI
- Implement conversation history
- Add typing indicators
- Create message queuing system

#### 5.2 State Management
- Set up conversation context
- Implement message persistence
- Create conversation recovery system
- Add offline support

### 6. Parental Controls & Safety (P1)

#### 6.1 Content Filtering
- Implement content moderation
- Create inappropriate content detection
- Add reporting system
- Set up content logs

#### 6.2 Usage Controls
- Create usage time limits
- Add activity monitoring
- Implement restricted modes
- Create parental dashboard

### 7. Performance Optimization (P2)

#### 7.1 Response Optimization
- Implement request caching
- Add response compression
- Create loading states
- Optimize API calls

#### 7.2 Resource Management
- Implement audio file cleanup
- Add image optimization
- Create memory management
- Optimize battery usage

### Suggested File Structure

├── README.md
├── app.json
├── assets/
│   ├── fonts/
│   ├── images/
│   ├── animations/
│   └── sounds/
├── babel.config.js
├── package.json
├── tsconfig.json
├── src/
│   ├── App.tsx                   # Root component
│   ├── index.ts                  # Entry point
│   ├── api/                      # API integrations
│   │   ├── config.ts             # API configuration and constants
│   │   ├── endpoints.ts          # API endpoint definitions
│   │   ├── services/
│   │   │   ├── supabaseService.ts    # Supabase API integration
│   │   │   ├── openaiService.ts      # OpenAI (Whisper/ChatGPT) integration
│   │   │   ├── elevenLabsService.ts  # ElevenLabs voice synthesis
│   │   │   └── index.ts
│   │   └── types/
│   │       └── apiTypes.ts           # API-related TypeScript types
│   ├── components/
│   │   ├── common/                   # Reusable components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.styles.ts
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   ├── Loading/
│   │   │   └── ...                   # Other common components
│   │   ├── auth/                     # Authentication components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   └── ForgotPasswordForm.tsx
│   │   ├── stuffedAnimal/            # Stuffed animal components
│   │   │   ├── AnimalCard.tsx
│   │   │   ├── VoiceSelector.tsx
│   │   │   └── PersonalitySettings.tsx
│   │   └── conversation/             # Conversation components
│   │       ├── ChatBubble.tsx
│   │       ├── AudioRecorder.tsx
│   │       └── VoicePlayer.tsx
│   ├── config/
│   │   ├── supabase.ts           # Supabase configuration
│   │   ├── openai.ts             # OpenAI configuration
│   │   └── elevenLabs.ts         # ElevenLabs configuration
│   ├── constants/
│   │   ├── colors.ts             # Color definitions
│   │   ├── typography.ts         # Typography styles
│   │   ├── spacing.ts            # Spacing constants
│   │   └── config.ts             # App configuration constants
│   ├── context/
│   │   ├── AuthContext.tsx       # Authentication context
│   │   ├── ConversationContext.tsx  # Conversation state context
│   │   └── SettingsContext.tsx   # App settings context
│   ├── hooks/
│   │   ├── useAuth.ts            # Authentication hooks
│   │   ├── useConversation.ts    # Conversation management hooks
│   │   ├── useAudioRecorder.ts   # Audio recording hooks
│   │   ├── useVoiceSynthesis.ts  # Voice synthesis hooks
│   │   └── useSupabase.ts        # Supabase hooks
│   ├── localization/
│   │   ├── en/                   # English translations
│   │   ├── es/                   # Spanish translations
│   │   └── i18n.ts               # Internationalization configuration
│   ├── navigation/
│   │   ├── AppNavigator.tsx      # Main navigation setup
│   │   ├── AuthNavigator.tsx     # Authentication flow navigation
│   │   ├── MainNavigator.tsx     # Main app flow navigation
│   │   └── ParentNavigator.tsx   # Parental controls navigation
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── SignupScreen.tsx
│   │   │   └── ForgotPasswordScreen.tsx
│   │   ├── onboarding/
│   │   │   ├── WelcomeScreen.tsx
│   │   │   ├── AnimalSetupScreen.tsx
│   │   │   └── VoiceSetupScreen.tsx
│   │   ├── main/
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── ConversationScreen.tsx
│   │   │   ├── HistoryScreen.tsx
│   │   │   └── SettingsScreen.tsx
│   │   └── parent/
│   │       ├── ParentDashboardScreen.tsx
│   │       └── ControlsScreen.tsx
│   ├── store/                     # State management (e.g., Redux)
│   │   ├── conversations/
│   │   │   ├── conversationSlice.ts
│   │   │   └── selectors.ts
│   │   ├── stuffedAnimals/
│   │   │   ├── stuffedAnimalSlice.ts
│   │   │   └── selectors.ts
│   │   └── store.ts
│   ├── theme/
│   │   ├── index.ts               # Theme exports
│   │   ├── lightTheme.ts          # Light theme definition
│   │   └── darkTheme.ts           # Dark theme definition
│   ├── types/
│   │   ├── navigation.ts          # Navigation types
│   │   ├── conversation.ts        # Conversation types
│   │   ├── stuffedAnimal.ts       # Stuffed animal types
│   │   └── user.ts                # User types
│   └── utils/
│       ├── audio/
│       │   ├── recorder.ts
│       │   └── player.ts
│       ├── validation.ts          # Form validation utilities
│       ├── permissions.ts         # Permissions handling
│       ├── storage.ts             # Local storage utilities
│       └── analytics.ts           # Analytics helpers
└── other configuration files and scripts

## Explanation
assets/: Contains static assets like fonts, images, animations, and sounds.

src/: The main source directory for your application code.

api/: Contains API integration code.

config.ts: Configuration and constants for API services.
endpoints.ts: Definitions of API endpoints.
services/: Service integrations for Supabase, OpenAI, and ElevenLabs.
types/: TypeScript types related to API data.
components/: Reusable UI components.

common/: Shared components like buttons, inputs, and loaders.
auth/: Components related to user authentication.
stuffedAnimal/: Components specific to stuffed animal features.
conversation/: Components for conversation functionalities.
config/: Configuration files for third-party services.

constants/: Application-wide constants like colors and typography.

context/: Context providers for global state management.

hooks/: Custom React hooks for various functionalities.

localization/: Localization files for internationalization support.

navigation/: Navigation configuration using React Navigation.

screens/: Screen components representing different app views.

auth/: Authentication screens.
onboarding/: Onboarding flow screens.
main/: Main application screens.
parent/: Parental control screens.
store/: State management setup (e.g., Redux or Zustand).

theme/: Theming and styling configurations.

types/: Global TypeScript type definitions.

utils/: Utility functions and helpers.

App.tsx: The root component of your React Native application.

index.ts: The entry point of your application.

# Key Configuration Files

## app.json
{
  "expo": {
    "name": "Stuffed Animal Companion",
    "slug": "stuffed-animal-companion",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.stuffedanimalcompanion"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.yourcompany.stuffedanimalcompanion"
    }
  }
}

## babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@assets': './assets',
          '@api': './src/api',
          '@types': './src/types'
        }
      }
    ]
  ]
}

## tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext",
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@screens/*": ["screens/*"],
      "@navigation/*": ["navigation/*"],
      "@hooks/*": ["hooks/*"],
      "@utils/*": ["utils/*"],
      "@assets/*": ["../assets/*"],
      "@api/*": ["api/*"],
      "@types/*": ["types/*"]
    }
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}



### Technical Requirements

#### Dependencies
```json
{
  "dependencies": {
    "@react-navigation/native": "^6.0.0",
    "@supabase/supabase-js": "^2.0.0",
    "react-native-track-player": "^3.2.0",
    "react-native-camera": "^4.2.1",
    "react-native-audio-recorder": "^2.0.0",
    "@react-native-async-storage/async-storage": "^1.17.11"
  }
}
```

### API Integration Flow

```typescript
interface ConversationFlow {
  1: "Record audio input"
  2: "Convert to text (Whisper)"
  3: "Process with ChatGPT"
  4: "Generate voice (ElevenLabs)"
  5: "Play response"
}
```

### Database Schema (Supabase)

```sql
-- Users table
create table users (
  id uuid references auth.users primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  email text unique,
  parent_email text
);

-- Stuffed animals table
create table stuffed_animals (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  name text,
  description text,
  voice_id text,
  voice_settings jsonb,
  personality_traits jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Conversations table
create table conversations (
  id uuid primary key default uuid_generate_v4(),
  stuffed_animal_id uuid references stuffed_animals(id),
  started_at timestamp with time zone default timezone('utc'::text, now()),
  ended_at timestamp with time zone
);

-- Messages table
create table messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid references conversations(id),
  content text,
  audio_url text,
  role text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### Success Metrics

1. Response Time
   - Voice recording to response: < 3s
   - Text processing: < 1s
   - Voice synthesis: < 2s

2. User Engagement
   - Average session length: > 5 min
   - Return rate: > 50%
   - Conversations per day: > 3

3. Technical Performance
   - App crash rate: < 0.1%
   - API error rate: < 1%
   - Audio quality issues: < 2%

### Priority Levels

- P0: Core functionality
- P1: Essential features
- P2: Enhancement features
- P3: Nice-to-have features

### Implementation Timeline

1. Phase 1 (4 weeks)
   - Basic app structure
   - Authentication
   - Voice recording/playback

2. Phase 2 (4 weeks)
   - AI integration
   - Conversation system
   - Voice synthesis

3. Phase 3 (3 weeks)
   - Parental controls
   - Performance optimization
   - Testing and refinement

### Security Considerations

1. Data Protection
   - End-to-end encryption for voice data
   - Secure API key storage
   - Regular security audits

2. Privacy
   - COPPA compliance
   - GDPR compliance
   - Data retention policies

3. Content Safety
   - Real-time content filtering
   - Automated moderation
   - Manual review system