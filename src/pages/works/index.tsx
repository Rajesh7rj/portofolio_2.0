import Button from '@/components/form/Button';
import PageTitle from '@/components/shared/PageTitle';
import Portfolio from '@/components/shared/Portfolio';
import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';

const work = () => {
  return (
    <AppLayout title="Works">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Works', path: '' },
        ]}
      >
        Works
      </PageTitle>

      <div className="container py-10 mb-10">
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {Array.isArray(works) &&
          works
            .filter((item) => Object.keys(item).length > 0) // keep only non-empty objects
            .map((item) => (
              <Portfolio
                key={item.id}
                imageUrl={item.thumbnailUrl}
                category={item.category}
                title={item.title}
                href={`/works/${item.id}`}
              />
            ))}
        </div>
        {/* <div className="mt-10 flex items-center justify-center">
          <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
            Load More
          </Button>
        </div> */}
      </div>
    </AppLayout>
  );
};

export default work;
