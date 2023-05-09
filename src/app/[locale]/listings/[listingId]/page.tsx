import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";

import ClinetOnly from "@/app/[locale]/compoments/ClientOnly";
import EmptyState from "@/app/[locale]/compoments/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  if (!listing) {
    return (
      <ClinetOnly>
        <EmptyState />
      </ClinetOnly>
    );
  }
  return (
    <ClinetOnly>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
      />
    </ClinetOnly>
  );
};

export default ListingPage;
