const mapping: Record<string, string> = {
  employees: 'employee',
  teams: 'team',
  'time-trackings': 'time_tracking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
