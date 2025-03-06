
import React, { useState } from 'react';
import { Folder, Share, Users, Lock, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

type CortexCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: CortexItem[];
};

type CortexItem = {
  id: string;
  name: string;
};

const CortexSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('shared');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const categories: CortexCategory[] = [
    {
      id: 'shared',
      name: 'Shared',
      icon: <Share size={16} className="text-blue-500" />,
      items: [
        { id: 'shared-1', name: 'Second Brain' },
        { id: 'shared-2', name: 'OSS' },
        { id: 'shared-3', name: 'Artificial Intelligence' },
      ]
    },
    {
      id: 'team',
      name: 'Team Space',
      icon: <Users size={16} className="text-green-500" />,
      items: [
        { id: 'team-1', name: 'Brainboard Competitors' },
        { id: 'team-2', name: 'Visualize Terraform' },
        { id: 'team-3', name: 'CI/CD Engine' },
      ]
    },
    {
      id: 'private',
      name: 'Private',
      icon: <Lock size={16} className="text-amber-500" />,
      items: [
        { id: 'private-1', name: 'UXUI' },
        { id: 'private-2', name: 'Space' },
        { id: 'private-3', name: 'Cloud Computing' },
      ]
    }
  ];

  return (
    <div className="w-60 border-r border-border/50 overflow-y-auto shrink-0">
      {categories.map((category) => (
        <div key={category.id} className="mb-6">
          <div 
            className={cn(
              "flex items-center justify-between px-4 py-2 text-sm font-medium cursor-pointer",
              selectedCategory === category.id ? "text-primary" : "text-foreground/80"
            )}
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="flex items-center gap-2">
              {category.icon}
              <span>{category.name}</span>
            </div>
            <button className="p-1 rounded-full hover:bg-muted">
              <Plus size={14} />
            </button>
          </div>
          
          <div className="mt-1">
            {category.items.map((item) => (
              <div 
                key={item.id}
                className={cn(
                  "flex items-center px-6 py-2 text-sm cursor-pointer",
                  selectedItem === item.id 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-muted/50 text-foreground/80"
                )}
                onClick={() => setSelectedItem(item.id)}
              >
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CortexSidebar;
