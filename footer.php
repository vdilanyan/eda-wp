        </main><?php
        use Timber\Timber;

        $context = Timber::get_context();

        $context = array_merge($context, [
	        'footer' => [

            ],
        ]);

        Timber::render('layout/footer.twig', $context);

        wp_footer(); ?>
    </body>
</html>
