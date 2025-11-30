import { render, screen } from '@/test-utils';
import HeaderBox from './HeaderBox';

describe('HeaderBox component', () => {
  it('has correct Next.js theming section link', () => {
    render(<HeaderBox />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
