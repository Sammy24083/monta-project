export const CHART_DATA = [
  { name: 'Mon', amount: 120000 },
  { name: 'Tue', amount: 210000 },
  { name: 'Wed', amount: 180000 },
  { name: 'Thu', amount: 340000 },
  { name: 'Fri', amount: 290000 },
  { name: 'Sat', amount: 140000 },
  { name: 'Sun', amount: 95000 },
];

export const TRANSACTIONS = [
  { id: "TRX-109283", ref: "Payment from Lenco HQ", type: "credit", amount: "₦450,000.00", date: "Oct 24, 10:24 AM", status: "Successful", category: "Income" },
  { id: "TRX-109282", ref: "AWS Billing", type: "debit", amount: "₦24,500.00", date: "Oct 23, 08:15 PM", status: "Successful", category: "Infrastructure" },
  { id: "TRX-109281", ref: "Ref: SALARY/JD/OCT", type: "debit", amount: "₦150,000.00", date: "Oct 22, 09:00 AM", status: "Pending", category: "Salaries" },
  { id: "TRX-109280", ref: "Transfer from StartupX", type: "credit", amount: "₦1,200,500.00", date: "Oct 20, 02:40 PM", status: "Successful", category: "Income" },
  { id: "TRX-109279", ref: "Reversal: Failed TRX", type: "credit", amount: "₦15,000.00", date: "Oct 19, 11:15 AM", status: "Successful", category: "Misc" },
  { id: "TRX-109278", ref: "Payment from Paystack", type: "credit", amount: "₦75,000.00", date: "Oct 18, 04:30 PM", status: "Successful", category: "Income" },
  { id: "TRX-109277", ref: "Office Rent", type: "debit", amount: "₦500,000.00", date: "Oct 17, 09:00 AM", status: "Successful", category: "Rent" },
  { id: "TRX-109276", ref: "Apple Services", type: "debit", amount: "₦4,500.00", date: "Oct 16, 08:00 PM", status: "Successful", category: "Subscription" },
];

export const CATEGORY_DATA = [
  { name: 'Rent', value: 500000, color: '#0052FF' },
  { name: 'Salaries', value: 150000, color: '#10B981' },
  { name: 'Cloud', value: 24500, color: '#F59E0B' },
  { name: 'Fees', value: 4500, color: '#6366F1' },
  { name: 'Misc', value: 15000, color: '#94A3B8' },
];

export const MONTHLY_TRENDS = [
  { month: 'May', inflow: 1200000, outflow: 800000 },
  { month: 'Jun', inflow: 1500000, outflow: 900000 },
  { month: 'Jul', inflow: 1100000, outflow: 1200000 },
  { month: 'Aug', inflow: 1800000, outflow: 1000000 },
  { month: 'Sep', inflow: 2100000, outflow: 1300000 },
  { month: 'Oct', inflow: 1740500, outflow: 679000 },
];
