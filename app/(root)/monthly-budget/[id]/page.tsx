import React from 'react';
import HeaderBox from '@/components/HeaderBox/HeaderBox';
import MonthlyOverview from '@/components/MonthlyBudget/MonthlyOverview/MonthlyOverview';

const monthsMap: { [key: string]: string } = {
  jan: 'January',
  feb: 'February',
  mar: 'March',
  apr: 'April',
  may: 'May',
  jun: 'June',
  jul: 'July',
  aug: 'August',
  sep: 'September',
  oct: 'October',
  nov: 'November',
  dec: 'December',
};

const MonthPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  
  // Parse id like "dec25"
  const monthCode = id.substring(0, 3).toLowerCase();
  const yearCode = id.substring(3);
  
  const monthName = monthsMap[monthCode] || monthCode;
  const fullYear = `20${yearCode}`;

  const title = `${monthName} ${fullYear}`;

  return (
    <section className="w-full">
      <HeaderBox 
        type="title" 
        title={title} 
        subtitle={'Overview'}
      />
      
      <div className="mt-6">
        <MonthlyOverview />
      </div>
    </section>
  );
};

export default MonthPage;
