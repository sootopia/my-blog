interface Category {
  id: number;
  name: string;
  filter: 'all' | 'project' | 'study' | 'os' | 'tools' | 'cicd';
}

export default Category;
