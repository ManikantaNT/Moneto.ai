import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Plus, Edit2, Trash2, Save, X, ShoppingCart, Home, Car, CoffeeIcon, Zap, Monitor, Briefcase, Plane, Heart, Scissors } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  color: string;
  icon: React.ReactNode;
  transactionCount: number;
  isDefault?: boolean;
  isEditing?: boolean;
}

const defaultCategories: Category[] = [
  { id: 'cat-1', name: 'Groceries', color: '#3B82F6', icon: <ShoppingCart />, transactionCount: 56, isDefault: true },
  { id: 'cat-2', name: 'Housing', color: '#059669', icon: <Home />, transactionCount: 12, isDefault: true },
  { id: 'cat-3', name: 'Transportation', color: '#F59E0B', icon: <Car />, transactionCount: 34, isDefault: true },
  { id: 'cat-4', name: 'Dining', color: '#EC4899', icon: <CoffeeIcon />, transactionCount: 28, isDefault: true },
  { id: 'cat-5', name: 'Utilities', color: '#8B5CF6', icon: <Zap />, transactionCount: 8, isDefault: true },
  { id: 'cat-6', name: 'Entertainment', color: '#EF4444', icon: <Monitor />, transactionCount: 15, isDefault: true },
  { id: 'cat-7', name: 'Income', color: '#10B981', icon: <Briefcase />, transactionCount: 6, isDefault: true },
  { id: 'cat-8', name: 'Travel', color: '#6366F1', icon: <Plane />, transactionCount: 4 },
  { id: 'cat-9', name: 'Healthcare', color: '#F43F5E', icon: <Heart />, transactionCount: 7 },
  { id: 'cat-10', name: 'Personal Care', color: '#D946EF', icon: <Scissors />, transactionCount: 9 },
];

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>(defaultCategories);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [newCategory, setNewCategory] = useState<Partial<Category>>({
    name: '',
    color: '#3B82F6',
  });
  
  const handleEdit = (id: string) => {
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, isEditing: true } 
        : category
    ));
  };
  
  const handleSave = (id: string) => {
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, isEditing: false } 
        : category
    ));
  };
  
  const handleCancel = (id: string) => {
    setCategories(categories.map(category => 
      category.id === id 
        ? { ...category, isEditing: false } 
        : category
    ));
  };
  
  const handleDelete = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
  };
  
  const handleNewCategoryChange = (field: keyof Omit<Category, 'id' | 'icon' | 'transactionCount'>, value: string) => {
    setNewCategory({ ...newCategory, [field]: value });
  };
  
  const handleAddCategory = () => {
    if (newCategory.name && newCategory.color) {
      const newId = `cat-${categories.length + 1}`;
      setCategories([
        ...categories,
        {
          id: newId,
          name: newCategory.name,
          color: newCategory.color,
          icon: <ShoppingCart />, // Default icon
          transactionCount: 0,
          isDefault: false,
        },
      ]);
      setIsCreatingNew(false);
      setNewCategory({ name: '', color: '#3B82F6' });
    }
  };
  
  const colorOptions = [
    '#3B82F6', // blue
    '#059669', // green
    '#F59E0B', // yellow
    '#EC4899', // pink
    '#8B5CF6', // purple
    '#EF4444', // red
    '#10B981', // emerald
    '#6366F1', // indigo
    '#F43F5E', // rose
    '#D946EF', // fuchsia
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Transaction Categories</h1>
        <Button 
          leftIcon={<Plus size={16} />}
          onClick={() => setIsCreatingNew(true)}
          disabled={isCreatingNew}
        >
          Add Category
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Manage Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {isCreatingNew && (
            <div className="mb-6 p-4 border border-primary-200 bg-primary-50 rounded-lg">
              <h3 className="text-lg font-medium text-primary-900 mb-4">Add New Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                  <input
                    type="text"
                    value={newCategory.name}
                    onChange={(e) => handleNewCategoryChange('name', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter category name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        type="button"
                        className={`w-6 h-6 rounded-full ${
                          newCategory.color === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => handleNewCategoryChange('color', color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsCreatingNew(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCategory} disabled={!newCategory.name}>
                  Add Category
                </Button>
              </div>
            </div>
          )}
          
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transactions
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {category.isEditing ? (
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: category.color }}>
                            {React.cloneElement(category.icon as React.ReactElement, { 
                              className: 'text-white', 
                              size: 16 
                            })}
                          </div>
                          <input
                            type="text"
                            value={category.name}
                            onChange={(e) => {
                              setCategories(categories.map(c => 
                                c.id === category.id 
                                  ? { ...c, name: e.target.value } 
                                  : c
                              ));
                            }}
                            className="p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: category.color }}>
                            {React.cloneElement(category.icon as React.ReactElement, { 
                              className: 'text-white', 
                              size: 16 
                            })}
                          </div>
                          <span className="font-medium text-gray-900">{category.name}</span>
                          {category.isDefault && (
                            <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                              Default
                            </span>
                          )}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {category.transactionCount} transactions
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {category.isEditing ? (
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            leftIcon={<Save size={16} />}
                            onClick={() => handleSave(category.id)}
                          >
                            Save
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            leftIcon={<X size={16} />}
                            onClick={() => handleCancel(category.id)}
                          >
                            Cancel
                          </Button>
                        </div>
                      ) : (
                        <div className="flex justify-end space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            leftIcon={<Edit2 size={16} />}
                            onClick={() => handleEdit(category.id)}
                          >
                            Edit
                          </Button>
                          {!category.isDefault && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              leftIcon={<Trash2 size={16} />}
                              onClick={() => handleDelete(category.id)}
                            >
                              Delete
                            </Button>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Category Rules</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 mb-4">
            Set up automatic categorization rules based on transaction descriptions.
            This helps Moneta.ai categorize your transactions more accurately.
          </p>
          
          <Button leftIcon={<Plus size={16} />}>Add Categorization Rule</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Categories;