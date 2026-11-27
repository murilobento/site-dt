interface CtaBannerProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon?: string;
  onAction: () => void;
  showContactMeta?: boolean;
  secondaryLink?: {
    label: string;
    onClick: () => void;
  };
}

export function CtaBanner({
  title,
  description,
  buttonLabel,
  buttonIcon = 'mail',
  onAction,
  showContactMeta = true,
  secondaryLink,
}: CtaBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pb-section">
      <div className="rounded-lg bg-light-primary-container text-light-on-primary-container p-6 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-8 flex flex-col gap-3">
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-primary text-balance">
            {title}
          </h2>
          <p className="font-body text-body-lg text-light-on-primary-container max-w-prose text-pretty">
            {description}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col lg:items-end gap-3">
          <div className="flex flex-wrap lg:justify-end gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={onAction}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-light-secondary-container text-light-on-secondary-container font-label text-label-lg whitespace-nowrap shrink-0 transition-colors duration-state-change hover:bg-light-secondary hover:text-light-on-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-on-primary cursor-pointer"
            >
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                {buttonIcon}
              </span>
              <span>{buttonLabel}</span>
            </button>

            {secondaryLink && (
              <button
                type="button"
                onClick={secondaryLink.onClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded border border-light-on-primary-container text-light-on-primary font-label text-label-lg whitespace-nowrap shrink-0 transition-colors duration-state-change hover:bg-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-on-primary cursor-pointer"
              >
                <span>{secondaryLink.label}</span>
              </button>
            )}
          </div>

          {showContactMeta && (
            <span className="font-mono text-mono-md text-light-on-primary-container tabular-nums">
              (41) 3042-8800 • engenharia@dtconstrutora.com.br
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
