'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  unit: string;
}

export interface Order {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  //deliveryDate: string;
  specialInstructions: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

interface OrdersContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'status'>) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  deleteOrder: (orderId: string) => void;
  getOrderById: (orderId: string) => Order | undefined;
  getOrdersByStatus: (status: OrderStatus) => Order[];
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

// Sample orders for demo
const SAMPLE_ORDERS: Order[] = [
  {
    id: 'ORD-001',
    customerName: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '(503) 555-0101',
    address: '123 Maple Street',
    city: 'Portland',
    state: 'Oregon',
    zip: '97201',
    //deliveryDate: '2025-02-21',
    specialInstructions: 'Leave at front door',
    items: [
      { id: 'pea-shoots-4oz', name: 'Pea Shoots', price: 8.00, quantity: 2, unit: '4 oz' },
      { id: 'sunflower-shoots-4oz', name: 'Sunflower Shoots', price: 9.00, quantity: 1, unit: '4 oz' },
    ],
    subtotal: 25.00,
    shipping: 0,
    total: 25.00,
    status: 'confirmed',
    createdAt: '2025-02-19T10:30:00Z',
  },
  {
    id: 'ORD-002',
    customerName: 'Bob Smith',
    email: 'bob@example.com',
    phone: '(503) 555-0102',
    address: '456 Oak Avenue',
    city: 'Portland',
    state: 'Oregon',
    zip: '97202',
    //deliveryDate: '2025-02-22',
    specialInstructions: '',
    items: [
      { id: 'signature-mix-4oz', name: 'Signature Mix', price: 12.00, quantity: 3, unit: '4 oz' },
      { id: 'wheatgrass-4oz', name: 'Wheatgrass', price: 6.00, quantity: 2, unit: '4 oz' },
    ],
    subtotal: 48.00,
    shipping: 0,
    total: 48.00,
    status: 'pending',
    createdAt: '2025-02-19T14:15:00Z',
  },
  {
    id: 'ORD-003',
    customerName: 'Carol Davis',
    email: 'carol@example.com',
    phone: '(503) 555-0103',
    address: '789 Pine Road',
    city: 'Portland',
    state: 'Oregon',
    zip: '97203',
    //deliveryDate: '2025-02-20',
    specialInstructions: 'Call upon arrival',
    items: [
      { id: 'radish-microgreens-3oz', name: 'Radish Microgreens', price: 7.50, quantity: 2, unit: '3 oz' },
      { id: 'broccoli-microgreens-3oz', name: 'Broccoli Microgreens', price: 8.50, quantity: 2, unit: '3 oz' },
      { id: 'kale-microgreens-3oz', name: 'Kale Microgreens', price: 8.00, quantity: 1, unit: '3 oz' },
    ],
    subtotal: 40.00,
    shipping: 0,
    total: 40.00,
    status: 'preparing',
    createdAt: '2025-02-18T09:00:00Z',
  },
  {
    id: 'ORD-004',
    customerName: 'David Wilson',
    email: 'david@example.com',
    phone: '(503) 555-0104',
    address: '321 Cedar Lane',
    city: 'Portland',
    state: 'Oregon',
    zip: '97204',
    //deliveryDate: '2025-02-19',
    specialInstructions: '',
    items: [
      { id: 'mustard-microgreens-3oz', name: 'Mustard Microgreens', price: 7.00, quantity: 1, unit: '3 oz' },
    ],
    subtotal: 7.00,
    shipping: 5.99,
    total: 12.99,
    status: 'delivered',
    createdAt: '2025-02-17T16:45:00Z',
  },
];

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(SAMPLE_ORDERS);

  const addOrder = useCallback((newOrder: Omit<Order, 'id' | 'createdAt' | 'status'>) => {
    const order: Order = {
      ...newOrder,
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setOrders(currentOrders => [order, ...currentOrders]);
  }, [orders.length]);

  const updateOrderStatus = useCallback((orderId: string, status: OrderStatus) => {
    setOrders(currentOrders =>
      currentOrders.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  }, []);

  const deleteOrder = useCallback((orderId: string) => {
    setOrders(currentOrders => currentOrders.filter(order => order.id !== orderId));
  }, []);

  const getOrderById = useCallback((orderId: string) => {
    return orders.find(order => order.id === orderId);
  }, [orders]);

  const getOrdersByStatus = useCallback((status: OrderStatus) => {
    return orders.filter(order => order.status === status);
  }, [orders]);

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        deleteOrder,
        getOrderById,
        getOrdersByStatus,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
