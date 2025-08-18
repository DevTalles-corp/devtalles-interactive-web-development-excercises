
export interface TabData {
  id: string;
  title: string;
  content: {
    title: string;
    subTitle: string;
  };
}

export const tabsData: TabData[] = [
  {
    id: 'html',
    title: 'HTML',
    content: {
     title: 'HTML: El Esqueleto de la Web',
     subTitle: 'HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web.'  
    }
  },
  {
    id: 'css',
    title: 'CSS',
    content: {
      title: 'CSS: El Estilo de la Web',
      subTitle: 'CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo utilizado para describir la presentación de un documento.',
    }
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    content: {
      title: 'JavaScript: La Magia de la Web',
      subTitle: 'JavaScript es un lenguaje de programación que permite implementar características complejas en las páginas web.'
    }
  },
];