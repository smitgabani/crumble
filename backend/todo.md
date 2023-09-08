# To-dos

1. open-ai - create a open-ai yml file for documentation.
2. add following routes
    - "/api/message_groups", methods=['GET']
    - "/api/messages/@<string:handle>", methods=['GET']
    - "/api/messages", methods=['POST','OPTIONS']
    - "/api/activities/home", methods=['GET']
    - "/api/activities/@<string:handle>", methods=['GET']
    - "/api/activities/search", methods=['GET']
    - "/api/activities", methods=['POST','OPTIONS']
    - "/api/activities/<string:activity_uuid>", methods=['GET']
    - "/api/activities/<string:activity_uuid>/reply", methods=['POST','OPTIONS']
    
3. thus code following services
