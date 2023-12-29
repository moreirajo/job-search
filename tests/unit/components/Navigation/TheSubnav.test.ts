import type { Mock } from "vitest";
import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import { useRoute } from "vue-router";
vi.mock("vue-router");

import TheSubnav from "@/components/Navigation/TheSubnav.vue";
import { useJobsStore } from "@/stores/jobs";

const useRouteMock = useRoute as Mock;

describe("TheSubnav", () => {
  const renderTheSubnav = () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();

    render(TheSubnav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesoneIcon: true,
        },
      },
    });

    return { jobsStore };
  };

  describe("when user is on jobs page", () => {
    it("displays job count", async () => {
      useRouteMock.mockReturnValue({ name: "JobResults" });

      const { jobsStore } = renderTheSubnav();
      const numbersOfJobs = 16;
      // @ts-expect-error: Getter is read only
      jobsStore.FILTERED_JOBS = Array(numbersOfJobs).fill();

      const jobCount = await screen.findByText(numbersOfJobs);
      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does NOT display job count", () => {
      useRouteMock.mockReturnValue({ name: "Home" });

      const { jobsStore } = renderTheSubnav();
      const numbersOfJobs = 16;
      // @ts-expect-error: Getter is read only
      jobsStore.FILTERED_JOBS = Array(numbersOfJobs).fill();

      const jobCount = screen.queryByText(numbersOfJobs);
      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
