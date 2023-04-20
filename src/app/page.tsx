import ClinetOnly from "./compoments/ClientOnly";
import Container from "./compoments/Container";
import EmptyState from "./compoments/EmptyState";
import ListingCard from "./compoments/listings/ListingCard";

import getListings from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const listings = await getListings();

  const currentUser = await getCurrentUser();
  const isEmpty = false;
  if (isEmpty) {
    return (
      <ClinetOnly>
        <EmptyState showReset />
      </ClinetOnly>
    );
  }
  return (
    <ClinetOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 xl:grid-col-5 2xl:grid-cols-6 gap-8">
          {listings.map((item: any) => (
            <ListingCard
              currentUser={currentUser}
              key={item.id}
              data={item}
            />
          ))}
        </div>
      </Container>
    </ClinetOnly>
  );
}
