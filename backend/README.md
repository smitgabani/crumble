# Crumble Microservice Specifications

## API Routes

| Route                                  | HTTP Methods  | Description                                | Success Code | Failure Code |
| -------------------------------------- | ------------- | ------------------------------------------ | ------------ | ------------ |
| `/api/message_groups`                  | GET           | Retrieves message groups for a user        | 200 (OK)     | 422          |
| `/api/messages/:handle`                | GET           | Retrieves messages between two users       | 200 (OK)     | 422          |
| `/api/messages`                        | POST, OPTIONS | Creates a new message between users        | 200 (OK)     | 422          |
| `/api/activities/home`                 | GET           | Retrieves home activities                  | 200 (OK)     | -            |
| `/api/activities/:handle`              | GET           | Retrieves activities for a user            | 200 (OK)     | 422          |
| `/api/activities/search`               | GET           | Searches activities based on a search term | 200 (OK)     | 422          |
| `/api/activities`                      | POST, OPTIONS | Creates a new activity                     | 200 (OK)     | 422          |
| `/api/activities/:activity_uuid`       | GET           | Retrieves details of a specific activity   | 200 (OK)     | -            |
| `/api/activities/:activity_uuid/reply` | POST, OPTIONS | Creates a reply to a specific activity     | 200 (OK)     | 422          |

#### Personal note

- Activate environment: source venv/bin/activate
- Deactivate environment: deactivate
