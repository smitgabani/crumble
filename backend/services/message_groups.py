from datetime import datetime, timedelta, timezone
class MessageGroups:
  def run(user_handle):
    model = {
      'errors': None,
      'data': None
    }

    now = datetime.now(timezone.utc).astimezone()
    results = [
      {
        'uuid': '24b95582-9e7b-4e0a-9ad1-639773ab7552',
        'display_name': 'Smit Gabani',
        'handle':  'smitgabani',
        'created_at': now.isoformat()
      },
      {
        'uuid': '417c360e-c4e6-4fce-873b-d2d71469b4ac',
        'display_name': 'Test user 2',
        'handle':  'test user 2',
        'created_at': now.isoformat()
    }]
    model['data'] = results
    return model