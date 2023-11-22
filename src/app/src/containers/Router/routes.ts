export const routes = {
  home: {
    root: '/',
    title: '',
  },
  lesson: {
    root: '/lessons/:id',
    getPath: (id: number) => `/lessons/${id}`,
    title: '',
  },
};
