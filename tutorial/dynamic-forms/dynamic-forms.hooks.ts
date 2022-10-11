import { HOOK_NAVIGATOR_NODES, NavigatorNode } from '@c8y/ngx-components';

const root = new NavigatorNode({
  label: 'Dynamic forms',
  icon: 'file-text'
});

root.add(
  new NavigatorNode({
    path: '/dynamic-forms/introduction',
    label: 'Introduction',
    icon: 'hand-o-right',
    priority: 80
  })
);

root.add(
  new NavigatorNode({
    path: '/dynamic-forms/json',
    label: 'JSON Schema',
    icon: 'c8y-icon c8y-icon-css',
    priority: 79
  })
);

root.add(
  new NavigatorNode({
    path: '/dynamic-forms/custom',
    label: 'Custom element',
    icon: 'cut',
    priority: 78
  })
);

export const hooks = [
  { provide: HOOK_NAVIGATOR_NODES, useValue: { get: () => root }, multi: true }
];
