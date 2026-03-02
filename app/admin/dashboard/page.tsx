'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut, 
  Search,
  Filter,
  ChevronDown,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Truck,
  ChefHat
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useOrders, type OrderStatus } from '@/contexts/OrdersContext';
import { adminConfig } from '@/lib/config';

const statusIcons: Record<OrderStatus, typeof Package> = {
  pending: Clock,
  confirmed: CheckCircle,
  preparing: ChefHat,
  ready: Package,
  delivered: Truck,
  cancelled: XCircle,
};

const statusColors: Record<OrderStatus, string> = {
  pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  confirmed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  preparing: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  ready: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  delivered: 'bg-green-500/20 text-green-400 border-green-500/30',
  cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { orders, updateOrderStatus } = useOrders();
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'customers' | 'settings'>('orders');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/admin');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    confirmed: orders.filter(o => o.status === 'confirmed').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    ready: orders.filter(o => o.status === 'ready').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
  };

  const handleLogout = () => {
    logout();
    router.push('/admin');
  };

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    updateOrderStatus(orderId, newStatus);
  };

  return (
    <div className="min-h-screen bg-page flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-white/10 flex-shrink-0">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-gold-500" />
            </div>
            <div>
              <h1 className="text-white font-serif">Admin</h1>
              <p className="text-white/40 text-xs">GreenSprout</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'orders'
                  ? 'bg-gold-500/20 text-gold-500'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              {adminConfig.ordersTab}
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'products'
                  ? 'bg-gold-500/20 text-gold-500'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Package className="w-5 h-5" />
              {adminConfig.productsTab}
            </button>
            <button
              onClick={() => setActiveTab('customers')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'customers'
                  ? 'bg-gold-500/20 text-gold-500'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Users className="w-5 h-5" />
              {adminConfig.customersTab}
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === 'settings'
                  ? 'bg-gold-500/20 text-gold-500'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Settings className="w-5 h-5" />
              {adminConfig.settingsTab}
            </button>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 w-64 p-6 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">{user.username[0].toUpperCase()}</span>
            </div>
            <div>
              <p className="text-white text-sm">{user.username}</p>
              <p className="text-white/40 text-xs capitalize">{user.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white/5 text-white/60 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            {adminConfig.logoutText}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 bg-page/95 backdrop-blur-sm border-b border-white/10 px-8 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif text-white">{adminConfig.dashboardTitle}</h2>
            <Link
              href="/"
              target="_blank"
              className="text-white/60 hover:text-gold-500 text-sm transition-colors"
            >
              View Website →
            </Link>
          </div>
        </header>

        <div className="p-8">
          {activeTab === 'orders' && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white/40 text-xs mb-1">Total</p>
                  <p className="text-2xl font-semibold text-white">{orderStats.total}</p>
                </div>
                <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                  <p className="text-yellow-400/60 text-xs mb-1">Pending</p>
                  <p className="text-2xl font-semibold text-yellow-400">{orderStats.pending}</p>
                </div>
                <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                  <p className="text-blue-400/60 text-xs mb-1">Confirmed</p>
                  <p className="text-2xl font-semibold text-blue-400">{orderStats.confirmed}</p>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                  <p className="text-purple-400/60 text-xs mb-1">Preparing</p>
                  <p className="text-2xl font-semibold text-purple-400">{orderStats.preparing}</p>
                </div>
                <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/20">
                  <p className="text-cyan-400/60 text-xs mb-1">Ready</p>
                  <p className="text-2xl font-semibold text-cyan-400">{orderStats.ready}</p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                  <p className="text-green-400/60 text-xs mb-1">Delivered</p>
                  <p className="text-2xl font-semibold text-green-400">{orderStats.delivered}</p>
                </div>
                <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                  <p className="text-red-400/60 text-xs mb-1">Cancelled</p>
                  <p className="text-2xl font-semibold text-red-400">{orderStats.cancelled}</p>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as OrderStatus | 'all')}
                    className="pl-12 pr-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="all" className="bg-gray-900">All Status</option>
                    {Object.entries(adminConfig.orderStatuses).map(([key, label]) => (
                      <option key={key} value={key} className="bg-gray-900">{label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                </div>
              </div>

              {/* Orders List */}
              <div className="space-y-4">
                {filteredOrders.map((order) => {
                  const StatusIcon = statusIcons[order.status];
                  const isExpanded = expandedOrder === order.id;

                  return (
                    <div
                      key={order.id}
                      className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
                    >
                      {/* Order Header */}
                      <div
                        className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
                        onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${statusColors[order.status]}`}>
                              <StatusIcon className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-white font-medium">{order.id}</p>
                              <p className="text-white/50 text-sm">{order.customerName}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="text-right">
                              <p className="text-gold-500 font-semibold">${order.total.toFixed(2)}</p>
                              <p className="text-white/40 text-sm">{order.items.length} items</p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm border ${statusColors[order.status]}`}>
                              {adminConfig.orderStatuses[order.status]}
                            </div>
                            <ChevronDown className={`w-5 h-5 text-white/40 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </div>

                      {/* Order Details */}
                      {isExpanded && (
                        <div className="border-t border-white/10 p-6 bg-white/[0.02]">
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Customer Info */}
                            <div>
                              <h4 className="text-white font-medium mb-3">Customer Information</h4>
                              <div className="space-y-2 text-sm">
                                <p className="text-white/60"><span className="text-white/40">Name:</span> {order.customerName}</p>
                                <p className="text-white/60"><span className="text-white/40">Email:</span> {order.email}</p>
                                <p className="text-white/60"><span className="text-white/40">Phone:</span> {order.phone}</p>
                              </div>
                            </div>

                            {/* Delivery Info */}
                            <div>
                              <h4 className="text-white font-medium mb-3">Delivery Information</h4>
                              <div className="space-y-2 text-sm">
                                <p className="text-white/60">{order.address}</p>
                                <p className="text-white/60">{order.city}, {order.state} {order.zip}</p>
                                <p className="text-white/60"><span className="text-white/40">Delivery Date:</span> {order.deliveryDate}</p>
                                {order.specialInstructions && (
                                  <p className="text-white/60"><span className="text-white/40">Notes:</span> {order.specialInstructions}</p>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Order Items */}
                          <div className="mt-6">
                            <h4 className="text-white font-medium mb-3">Order Items</h4>
                            <div className="space-y-2">
                              {order.items.map((item) => (
                                <div key={item.id} className="flex items-center justify-between py-2 border-b border-white/5">
                                  <div className="flex items-center gap-3">
                                    <span className="text-white">{item.name}</span>
                                    <span className="text-white/40">× {item.quantity}</span>
                                  </div>
                                  <span className="text-gold-500">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-between mt-4 pt-4 border-t border-white/10">
                              <span className="text-white/60">Subtotal</span>
                              <span className="text-white">${order.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-white/60">Shipping</span>
                              <span className="text-white">{order.shipping === 0 ? 'Free' : `$${order.shipping.toFixed(2)}`}</span>
                            </div>
                            <div className="flex justify-between text-lg font-semibold">
                              <span className="text-white">Total</span>
                              <span className="text-gold-500">${order.total.toFixed(2)}</span>
                            </div>
                          </div>

                          {/* Status Actions */}
                          <div className="mt-6 pt-6 border-t border-white/10">
                            <h4 className="text-white font-medium mb-3">Update Status</h4>
                            <div className="flex flex-wrap gap-2">
                              {Object.entries(adminConfig.orderStatuses).map(([status, label]) => (
                                <button
                                  key={status}
                                  onClick={() => handleStatusChange(order.id, status as OrderStatus)}
                                  disabled={order.status === status}
                                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    order.status === status
                                      ? 'bg-white/10 text-white/40 cursor-not-allowed'
                                      : 'bg-white/5 text-white hover:bg-gold-500/20 hover:text-gold-500'
                                  }`}
                                >
                                  {label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {filteredOrders.length === 0 && (
                  <div className="text-center py-16">
                    <ShoppingBag className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <p className="text-white/60">No orders found matching your criteria.</p>
                  </div>
                )}
              </div>
            </>
          )}

          {activeTab === 'products' && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">Product management coming soon.</p>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">Customer management coming soon.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="text-center py-16">
              <Settings className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <p className="text-white/60">Settings coming soon.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
